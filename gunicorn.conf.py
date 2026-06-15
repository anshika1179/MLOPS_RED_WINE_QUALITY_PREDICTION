import os
import signal
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))


def on_starting(server):
    from app import ensure_model_trained, validate_config_at_startup, _shutdown_handler
    from mlProject.utils.common import load_env_file

    load_env_file()

    signal.signal(signal.SIGTERM, _shutdown_handler)
    signal.signal(signal.SIGINT, _shutdown_handler)

    validate_config_at_startup()
    ensure_model_trained()


def when_ready(server):
    import logging
    logging.info("Server is ready. All workers started.")
