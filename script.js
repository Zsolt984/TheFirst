// Névlista és párok
const users = ["Zsuzsi", "Lackó", "Szabina", "Krisztián", "Tina", "Zsolti", "Kira", "Danika", "Hermina", "Norbi"];
const pairs = {
    "Zsuzsi": "Lackó",
    "Szabina": "Krisztián",
    "Tina": "Zsolti",
    "Kira": "Danika",
    "Hermina": "Norbi"
};

// Eltárolt korábbi sorsolások
const previousDraws = [];
let currentUser = "";

// Legördülő lista feltöltése
const userSelect = document.getElementById("userSelect");
users.forEach(user => {
    const option = document.createElement("option");
    option.value = user;
    option.textContent = user;
    userSelect.appendChild(option);
});

// Start gomb kattintás kezelése
document.getElementById("startButton").addEventListener("click", () => {
    const selectedUser = userSelect.value;
    if (!selectedUser) {
        alert("Ki vagy? Válaszd ki magad a legördülő listából!");
        return;
    }

    currentUser = selectedUser;
    document.getElementById("sorsolasSection").style.display = "block";
    alert(`Szia, ${currentUser}! Húzz a kalapból!`);
});

// Sorsolás logikája
document.getElementById("drawButton").addEventListener("click", () => {
    if (!currentUser) {
        alert("Először válassz ki egy felhasználót!");
        return;
    }

    const eligibleNames = users.filter(name => 
        name !== currentUser &&
        name !== pairs[currentUser] &&
        !previousDraws.includes(name)
    );

    if (eligibleNames.length === 0) {
        document.getElementById("result").innerText = "Nincs több elérhető név.";
        return;
    }

    const randomName = eligibleNames[Math.floor(Math.random() * eligibleNames.length)];
    previousDraws.push(randomName);
    document.getElementById("result").innerText = `Őt lepd meg valamivel: ${randomName}`;
});
