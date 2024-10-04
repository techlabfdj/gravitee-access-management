{{- define "gateway.httpHeadersProbes" -}}
    {{- $httpHeadersProbes := dict }}
    {{- if eq .Values.gateway.services.core.http.authentication.type "basic" }}
      {{- $httpHeadersProbes = dict "httpHeaders" (list (dict
          "name" "Authorization"
          "value" (printf "Basic %s" (printf "admin:%s" .Values.gateway.services.core.http.authentication.password | b64enc))
      )) }}
    {{- end }}

    {{- $httpHeadersProbes | toYaml }}
{{- end }}

{{- define "gateway.gatewayServiceCoreScheme" -}}
    {{- $gatewayServiceCoreScheme := "HTTP" }}
    {{- if .Values.gateway.services.core.http.secured }}
      {{- $gatewayServiceCoreScheme = "HTTPS" }}
    {{- end }}

    {{- $gatewayServiceCoreScheme }}
{{- end }}

{{- define "gateway.defaultLivenessProbe" -}}
    {{- $httpHeadersProbes := (include "gateway.httpHeadersProbes" . | fromYaml) -}}
    {{- $gatewayServiceCoreScheme := (include "gateway.gatewayServiceCoreScheme" .) -}}

    {{- $defaultLivenessProbe := dict
        "initialDelaySeconds" 30
        "periodSeconds" 30
        "timeoutSeconds" 3
        "successThreshold" 1
        "failureThreshold" 3
        "httpGet" (merge (dict
          "path" "/_node/health?probes=http-server"
          "scheme" $gatewayServiceCoreScheme
          "port" (.Values.gateway.services.core.http.port | default 18082)
        ) $httpHeadersProbes)
    }}

    {{- $defaultLivenessProbe | toYaml }}
{{- end }}

{{- define "gateway.defaultReadinessProbe" -}}
    {{- $httpHeadersProbes := (include "gateway.httpHeadersProbes" . | fromYaml) -}}
    {{- $gatewayServiceCoreScheme := (include "gateway.gatewayServiceCoreScheme" .) -}}

    {{- $defaultReadinessProbe := dict
        "initialDelaySeconds" 30
        "periodSeconds" 30
        "timeoutSeconds" 3
        "successThreshold" 1
        "failureThreshold" 3
        "httpGet" (merge (dict
          "path" "/_node/health?probes=http-server"
          "scheme" $gatewayServiceCoreScheme
          "port" (.Values.gateway.services.core.http.port | default 18082)
        ) $httpHeadersProbes)
    }}

    {{- $defaultReadinessProbe | toYaml }}
{{- end }}

{{- define "gateway.defaultStartupProbe" -}}
    {{- $httpHeadersProbes := (include "gateway.httpHeadersProbes" . | fromYaml) -}}
    {{- $gatewayServiceCoreScheme := (include "gateway.gatewayServiceCoreScheme" .) -}}

    {{- $defaultStartupProbe := dict
        "initialDelaySeconds" 10
        "periodSeconds" 10
        "timeoutSeconds" 1
        "successThreshold" 1
        "failureThreshold" 29
        "httpGet" (merge (dict
          "path" "/_node/health?probes=http-server,security-domain-sync"
          "scheme" $gatewayServiceCoreScheme
          "port" (.Values.gateway.services.core.http.port | default 18082)
        ) $httpHeadersProbes)
    }}

    {{- $defaultStartupProbe | toYaml }}
{{- end }}
