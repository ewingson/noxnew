// skeleton_main_init
// display function added
async function main() {
    const user = await restoreSession();

    document.getElementById('loading').setAttribute('hidden', '');

    if (!user) {
        document.getElementById('auth-guest').removeAttribute('hidden');

        return;
    }

    document.getElementById('username').innerHTML = `<a href="${user.url}" target="_blank">${user.name}</a>`;
    document.getElementById('auth-user').removeAttribute('hidden');

   /* const tasks = await loadTasks();

    for (const task of tasks) {
        appendTaskItem(task);
    } */
}

function login() {
    const loginUrl = getLoginUrl();

    if (!loginUrl)
        return;

    performLogin(loginUrl);
}

async function logout() {
    document.getElementById('logout-button').setAttribute('disabled', '');

    await performLogout();

    document.getElementById('auth-guest').removeAttribute('hidden');
    document.getElementById('auth-user').setAttribute('hidden', '');
    document.getElementById('logout-button').removeAttribute('disabled');
}

// write unordered list in index
function display(bookmark) {
    document.getElementById('items').appendChild(bookmark);
}

// ------------------------------------------------------------------

main();

window.onunhandledrejection = (error) => alert(`Error: ${error.reason?.message}`);
