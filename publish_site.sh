#!/usr/bin/env bash
SCRIPT_DIR="$(cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd)" # get current script dir portably
cd "${SCRIPT_DIR}"

if [[ -f "${SCRIPT_DIR}/.env" ]]; then
    . "${SCRIPT_DIR}/.env"
fi

if [[ -z "${SITE_DIR}" ]]; then
    echo "SITE_DIR is unset" && exit 1
fi
if [[ ! -d "${SITE_DIR}" ]]; then
    echo "${SITE_DIR} is not a directory" && exit 1
fi

rm -rfv "${SITE_DIR}" || exit 1

bundle exec jekyll build || exit 1

cp -rv _site "${SITE_DIR}" || exit 1
