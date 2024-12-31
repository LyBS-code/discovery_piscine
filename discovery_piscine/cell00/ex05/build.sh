#!/bin/bash

# Vérifier s'il n'y a pas d'arguments
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

# Parcourir chaque argument avec une boucle
while [ "$1" ]; do
    mkdir "ex$1" 2>/dev/null
    if [ $? -eq 0 ]; then
        echo "Directory ex$1 created."
    else
        echo "Failed to create directory ex$1. It may already exist."
    fi
    shift
done

