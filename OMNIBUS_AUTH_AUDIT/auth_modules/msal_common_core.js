function p() {
for (var e = 0, t = 0, r = arguments.length; t < r; t++)
e += arguments[t].length;
var n = Array(e)
, o = 0;
for (t = 0; t < r; t++)
for (var i = arguments[t], a = 0, s = i.length; a < s; a++,
o++)
n[o] = i[a];
return n
}
/*! @azure/msal-common v7.4.0 2022-09-06 */
var g, f, m, v, y, E = {
LIBRARY_NAME: "MSAL.JS",
SKU: "msal.js.common",
CACHE_PREFIX: "msal",
DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
DEFAULT_COMMON_TENANT: "common",
ADFS: "adfs",
AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
RESOURCE_DELIM: "|",
NO_ACCOUNT: "NO_ACCOUNT",
CLAIMS: "claims",
CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
OPENID_SCOPE: "openid",
PROFILE_SCOPE: "profile",
OFFLINE_ACCESS_SCOPE: "offline_access",
EMAIL_SCOPE: "email",
CODE_RESPONSE_TYPE: "code",
CODE_GRANT_TYPE: "authorization_code",
RT_GRANT_TYPE: "refresh_token",
FRAGMENT_RESPONSE_MODE: "fragment",
S256_CODE_CHALLENGE_METHOD: "S256",
URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
AUTHORIZATION_PENDING: "authorization_pending",
NOT_DEFINED: "not_defined",
EMPTY_STRING: "",
FORWARD_SLASH: "/",
IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
IMDS_VERSION: "2020-06-01",
IMDS_TIMEOUT: 2e3,
AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
KNOWN_PUBLIC_CLOUDS: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"],
TOKEN_RESPONSE_TYPE: "token",
ID_TOKEN_RESPONSE_TYPE: "id_token",
SHR_NONCE_VALIDITY: 240
}, C = [E.OPENID_SCOPE, E.PROFILE_SCOPE, E.OFFLINE_ACCESS_SCOPE], _ = p(C, [E.EMAIL_SCOPE]);
!function(e) {
e.CONTENT_TYPE = "Content-Type",
e.RETRY_AFTER = "Retry-After",
e.CCS_HEADER = "X-AnchorMailbox",
e.WWWAuthenticate = "WWW-Authenticate",
e.AuthenticationInfo = "Authentication-Info"
}(g || (g = {})),
function(e) {
e.ID_TOKEN = "idtoken",
e.CLIENT_INFO = "client.info",
e.ADAL_ID_TOKEN = "adal.idtoken",
e.ERROR = "error",
e.ERROR_DESC = "error.description",
e.ACTIVE_ACCOUNT = "active-account",
e.ACTIVE_ACCOUNT_FILTERS = "active-account-filters"
}(f || (f = {})),
function(e) {
e.COMMON = "common",
e.ORGANIZATIONS = "organizations",
e.CONSUMERS = "consumers"
}(m || (m = {})),
function(e) {
e.CLIENT_ID = "client_id",
e.REDIRECT_URI = "redirect_uri",
e.RESPONSE_TYPE = "response_type",
e.RESPONSE_MODE = "response_mode",
e.GRANT_TYPE = "grant_type",
e.CLAIMS = "claims",
e.SCOPE = "scope",
e.ERROR = "error",
e.ERROR_DESCRIPTION = "error_description",
e.ACCESS_TOKEN = "access_token",
e.ID_TOKEN = "id_token",
e.REFRESH_TOKEN = "refresh_token",
e.EXPIRES_IN = "expires_in",
e.STATE = "state",
e.NONCE = "nonce",
e.PROMPT = "prompt",
e.SESSION_STATE = "session_state",
e.CLIENT_INFO = "client_info",
e.CODE = "code",
e.CODE_CHALLENGE = "code_challenge",
e.CODE_CHALLENGE_METHOD = "code_challenge_method",
e.CODE_VERIFIER = "code_verifier",
e.CLIENT_REQUEST_ID = "client-request-id",
e.X_CLIENT_SKU = "x-client-SKU",
e.X_CLIENT_VER = "x-client-VER",
e.X_CLIENT_OS = "x-client-OS",
e.X_CLIENT_CPU = "x-client-CPU",
e.X_CLIENT_CURR_TELEM = "x-client-current-telemetry",
e.X_CLIENT_LAST_TELEM = "x-client-last-telemetry",
e.X_MS_LIB_CAPABILITY = "x-ms-lib-capability",
e.X_APP_NAME = "x-app-name",
e.X_APP_VER = "x-app-ver",
e.POST_LOGOUT_URI = "post_logout_redirect_uri",
e.ID_TOKEN_HINT = "id_token_hint",
e.DEVICE_CODE = "device_code",
e.CLIENT_SECRET = "client_secret",
e.CLIENT_ASSERTION = "client_assertion",
e.CLIENT_ASSERTION_TYPE = "client_assertion_type",
e.TOKEN_TYPE = "token_type",
e.REQ_CNF = "req_cnf",
e.OBO_ASSERTION = "assertion",
e.REQUESTED_TOKEN_USE = "requested_token_use",
e.ON_BEHALF_OF = "on_behalf_of",
e.FOCI = "foci",
e.CCS_HEADER = "X-AnchorMailbox",
e.RETURN_SPA_CODE = "return_spa_code",
e.NATIVE_BROKER = "nativebroker",
e.LOGOUT_HINT = "logout_hint"
}(v || (v = {})),
function(e) {
e.ACCESS_TOKEN = "access_token",
e.XMS_CC = "xms_cc"
}(y || (y = {}));
var T, w = {
LOGIN: "login",
SELECT_ACCOUNT: "select_account",
CONSENT: "consent",
NONE: "none",
CREATE: "create"
};
!function(e) {
e.ACCOUNT = "account",
e.SID = "sid",
e.LOGIN_HINT = "login_hint",
e.ID_TOKEN = "id_token",
e.DOMAIN_HINT = "domain_hint",
e.ORGANIZATIONS = "organizations",
e.CONSUMERS = "consumers",
e.ACCOUNT_ID = "accountIdentifier",
e.HOMEACCOUNT_ID = "homeAccountIdentifier"
}(T || (T = {}));
