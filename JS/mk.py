import subprocess
from sys import argv

project_name = f"p{argv[1]}"

subprocess.run(f"mkdir {project_name}", shell=True)
subprocess.run(f"cp blueprint/index.html {project_name}/index.html", shell=True)
subprocess.run(f"touch {project_name}/style.css", shell=True)
subprocess.run(f"touch {project_name}/script.js", shell=True)

