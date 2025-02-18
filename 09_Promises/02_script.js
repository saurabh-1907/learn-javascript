document.getElementById("getUser").addEventListener("click", async () => {
    try {
        let userData = await fetchRandomUser();
        displayUser(userData);
    } catch (error) {
        document.getElementById("userProfile").innerHTML = "Error fetching user data.";
        console.error("Error:", error);
    }
});

// Function to fetch user data using Promises
function fetchRandomUser() {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await fetch("https://randomuser.me/api/");
            if (!response.ok) {
                reject("Failed to fetch user data");
            }
            let data = await response.json();
            resolve(data.results[0]);  // Extracting user object
        } catch (error) {
            reject(error);
        }
    });
}

// Function to display user data
function displayUser(user) {
    document.getElementById("userProfile").innerHTML = `
        <img src="${user.picture.large}" alt="User Picture">
        <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <p><strong>Gender:</strong> ${user.gender}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
    `;
}
