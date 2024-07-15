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

  # Determine the OS
  local os=$(uname)

  if [[ "$os" == "Linux" || "$os" == "Darwin" ]]; then
    # macOS and Linux
    local pid=$(lsof -t -i :$port)
  elif [[ "$os" == "MINGW64_NT" || "$os" == "MSYS_NT" || "$os" == "CYGWIN_NT" ]]; then
    # Windows
    local pid=$(netstat -ano | grep ":$port" | awk '{print $5}')
  else
    echo "Unsupported OS: $os"
    return
  fi

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