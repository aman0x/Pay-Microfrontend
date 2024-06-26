

# List of microfrontend directories
MICROFRONTENDS=("Appshell" "Auth" "Dashboard" "Report" "Invoice")

start_microfrontend() {
  local microfrontend_dir=$1
  echo "Starting $microfrontend_dir..."
  cd $microfrontend_dir

  npm start &

  cd ..
}


export -f start_microfrontend


for microfrontend in "${MICROFRONTENDS[@]}"; do
  (start_microfrontend $microfrontend)
done


wait

echo "All microfrontends started."
