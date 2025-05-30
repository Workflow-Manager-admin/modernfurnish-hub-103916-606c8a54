#!/bin/bash
cd /home/kavia/workspace/code-generation/modernfurnish-hub-103916-606c8a54/modernfurnish_hub
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

