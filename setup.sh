mkdir -p ~/.react/

echo "\
[server]\n\
headless = true\n\
port = $PORT\n\
enableCORS = false\n\
\n\
"  >  ~/.react/config.toml
