import pytest
from core import normalize_input_buffer


def test_normalize_input_buffer_valid_string():
    """Validates data structures extract metrics with expected configuration keys."""
    sample_data = "  System Integrity Matrix Verified   "
    metrics = normalize_input_buffer(sample_data)
    
    assert metrics["raw_length"] == 37
    assert metrics["normalized_length"] == 31
    assert metrics["status_code"] == 1


def test_normalize_input_buffer_type_exception():
    """Confirms structure enforcement raises explicit exceptions on data boundary typing errors."""
    with pytest.raises(TypeError):
        normalize_input_buffer(None)  # type: ignore
