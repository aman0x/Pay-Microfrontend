#!/bin/bash

# List of microfrontend directories and their respective ports
declare -A MICROFRONTENDS_PORTS=(
  ["Appshell"]=8003
  ["Auth"]=8004
  ["Dashboard"]=8005
  ["Report"]=8002
  ["Invoice"]=8001
  ["Admin_dashboard"]=8006
)

stop_microfrontend() {
  local microfrontend_name=$1
  local port=${MICROFRONTENDS_PORTS[$microfrontend_name]}

  echo "Stopping $microfrontend_name running on port $port..."

  # Find the process ID (PID) using the port and kill it
   local pid=$(netstat -tuln | grep ":$port" | awk '{print $7}' | cut -d'/' -f1)

  if [ -n "$pid" ]; then
    kill -9 $pid
    echo "$microfrontend_name stopped."
  else
    echo "No process found running on port $port for $microfrontend_name."
  fi
}

export -f stop_microfrontend

for microfrontend in "${!MICROFRONTENDS_PORTS[@]}"; do
  (stop_microfrontend $microfrontend)
done

echo "All microfrontends stopped."
