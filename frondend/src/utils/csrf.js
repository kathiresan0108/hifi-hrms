// src/utils/csrf.js

export async function getCsrfToken() {
    const response = await fetch('http://localhost:8000/api/csrf-token/', {
        credentials: 'include',
    });
    const data = await response.json();
    return data.csrfToken;
}
