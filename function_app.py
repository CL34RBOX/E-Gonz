# ==============================================================================
# Azure Function Serverless Microservice Engine (Python 3.10+ Isolated Worker)
# Target Architecture: Automated Python Code Quality Diagnostics & Unit Verification
# Operational Constraint Layer: Read/Write Volatile Memory Buffer Execution Sandbox
# ==============================================================================

import io
import json
import logging
import os
import sys
import tempfile
import uuid
from datetime import datetime, timezone
import azure.functions as func

# Initialize the App instance tracking with anonymous authentication scopes
app = func.FunctionApp(http_auth_level=func.AuthLevel.FUNCTION)

@app.route(route="diagnostics/verify", methods=["POST"])
def execute_diagnostics(req: func.HttpRequest) -> func.HttpResponse:
    logging.info("[*] Ingesting unauthenticated client diagnostics request loop.")
    
    # Initialize high-fidelity tracking response schema signature map
    diagnostic_response = {
        "Timestamp": datetime.now(timezone.utc).isoformat(),
        "ExecutionId": str(uuid.uuid4()),
        "Status": "Processing",
        "LintResult": None,
        "TestResult": None,
        "ErrorMessage": None
    }

    try:
        # 1. Parse Inbound JSON Post Request Body Payload Frame
        try:
            req_body = req.get_json()
        except ValueError:
            raise ValueError("Malformed JSON validation payload structure dropped.")

        source_code = req_body.get("source_code", "")
        test_code = req_body.get("test_code", "")

        # 2. Establish Isolated Operational Sandbox inside Local Ephemeral Disk Temp Space
        with tempfile.TemporaryDirectory(prefix="egonz-sandbox-") as workspace:
            src_dir = os.path.join(workspace, "src")
            tests_dir = os.path.join(workspace, "tests")
            os.makedirs(src_dir, exist_ok=True)
            os.makedirs(tests_dir, exist_ok=True)

            # Write individual programmatic target files cleanly to temporary disk sectors
            core_file_path = os.path.join(src_dir, "core.py")
            test_file_path = os.path.join(tests_dir, "test_core.py")

            with open(core_file_path, "w", encoding="ascii") as f:
                f.write(source_code if source_code else "# Empty source root placeholder")

            with open(test_file_path, "w", encoding="ascii") as f:
                f.write(test_code if test_code else "# Empty test root placeholder")

            # 3. Programmatic Execution Block: Flake8 Static Analysis Check
            logging.info("[*] Invoking programmatic static analysis linter layers.")
            from flake8.api import legacy as flake8_api
            
            # Intercept standard output buffers to capture metrics cleanly
            stdout_capture = io.StringIO()
            stderr_capture = io.StringIO()
            
            orig_stdout = sys.stdout
            orig_stderr = sys.stderr
            sys.stdout = stdout_capture
            sys.stderr = stderr_capture

            try:
                # Target execution tracking definitions configuration
                style_guide = flake8_api.get_style_guide(
                    select=['E9', 'F63', 'F7', 'F82'],
                    max_line_length=127
                )
                report = style_guide.check_files([workspace])
                lint_exit_code = 0 if report.total_errors == 0 else 1
            finally:
                # Safely restore execution system output references
                sys.stdout = orig_stdout
                sys.stderr = orig_stderr

            diagnostic_response["LintResult"] = {
                "ExitCode": lint_exit_code,
                "Logs": stdout_capture.getvalue().strip() or f"Errors Counted: {report.total_errors}",
                "Passed": lint_exit_code == 0
            }

            # 4. Programmatic Execution Block: Pytest Functional Testing Check
            logging.info("[*] Invoking programmatic unit testing framework layers.")
            import pytest

            # Safely inject the ephemeral source directory path into runtime system search scopes
            if src_dir not in sys.path:
                sys.path.insert(0, src_dir)

            try:
                # Invoke pytest engine loop directly via API hooks, passing parameters into arguments lists
                pytest_buffer = io.StringIO()
                from _pytest.config import StringIOResultCapture
                
                # Execute programmatic test verification matrix collection sequence
                test_exit_code = pytest.main([
                    "-v",
                    "--durations=10",
                    tests_dir
                ], plugins=[StringIOResultCapture(pytest_buffer)])
                
                # Handle int representation maps of exit code structures safely
                test_exit_int = int(test_exit_code)
            finally:
                # Scrub path trace references to maintain thread container hygiene
                if sys.path[0] == src_dir:
                    sys.path.pop(0)

            diagnostic_response["TestResult"] = {
                "ExitCode": test_exit_int,
                "Logs": pytest_buffer.getvalue().strip() or f"Exit Status Registered: {test_exit_int}",
                "Passed": test_exit_int == 0
            }

        # 5. Compile Global Telemetry Status Outputs Check Evaluation
        if lint_exit_code == 0 and test_exit_int == 0:
            diagnostic_response["Status"] = "Success"
        else:
            diagnostic_response["Status"] = "FailedValidation"

        return func.HttpResponse(
            body=json.dumps(diagnostic_response),
            status_code=200,
            mimetype="application/json"
        )

    except Exception as e:
        # Universal Exception Catch Configuration to Encapsulate Core Faults Cleanly
        diagnostic_response["Status"] = "Error"
        diagnostic_response["ErrorMessage"] = str(e)
        
        return func.HttpResponse(
            body=json.dumps(diagnostic_response),
            status_code=500,
            mimetype="application/json"
        )
