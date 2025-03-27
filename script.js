const weapon = document.querySelector('.weaponImg');
const previousweaponBtn = document.querySelector('.previousweaponBtn');
const nextweaponBtn = document.querySelector('.nextweaponBtn');
const skin = document.querySelector('.skinImg');
const previousskinBtn = document.querySelector('.previousskinBtn');
const nextskinBtn = document.querySelector('.nextskinBtn');
const auxweapon = document.querySelector('.auxweaponImg');
const previousauxweaponBtn = document.querySelector('.previousauxweaponBtn');
const nextauxweaponBtn = document.querySelector('.nextauxweaponBtn');

const weapons = [
    "Weapons/Alucard's_Sword_Icon.png",
    "Weapons/Balanced_Blade_Icon.png",
    "Weapons/Blood_Sword_Icon.png"
];

const skins = [
    "Skins/Alucard_Outfit.png",
    "Skins/Maria_Renard_Outfit.png",
    "Skins/Ninja_Outfit.png"
];

const auxweapons = [
    "Auxweapons/Force_Shield_Icon.png",
    "Auxweapons/Gilded_Yumi_Icon.png",
    "Auxweapons/Nerves_of_Steel_Icon.png",
    "Auxweapons/Parry_Shield_Icon.png",
    "Auxweapons/Rampart_Icon.png"
];

let currentWeaponIndex = 0;
let currentSkinIndex = 0;
let currentAuxweaponIndex = 0;

function updateWeapon() {
    weapon.src = weapons[currentWeaponIndex];
}

function nextWeapon() {
    currentWeaponIndex = (currentWeaponIndex + 1) % weapons.length;
    updateWeapon();
}

function previousWeapon() {
    currentWeaponIndex = (currentWeaponIndex - 1 + weapons.length) % weapons.length;
    updateWeapon();
}

function updateSkin() {
    skin.src = skins[currentSkinIndex];
}

function nextSkin() {
    currentSkinIndex = (currentSkinIndex + 1) % skins.length;
    updateSkin();
}

function previousSkin() {
    currentSkinIndex = (currentSkinIndex - 1 + skins.length) % skins.length;
    updateSkin();
}

function updateAuxweapon() {
    auxweapon.src = auxweapons[currentAuxweaponIndex];
}

function nextAuxweapon() {
    currentAuxweaponIndex = (currentAuxweaponIndex + 1) % auxweapons.length;
    updateAuxweapon();
}

function previousAuxweapon() {
    currentAuxweaponIndex = (currentAuxweaponIndex - 1 + auxweapons.length) % auxweapons.length;
    updateAuxweapon();
}

nextweaponBtn.addEventListener('click', nextWeapon);
previousweaponBtn.addEventListener('click', previousWeapon);
nextskinBtn.addEventListener('click', nextSkin);
previousskinBtn.addEventListener('click', previousSkin);
nextauxweaponBtn.addEventListener('click', nextAuxweapon);
previousauxweaponBtn.addEventListener('click', previousAuxweapon);

updateWeapon();
updateSkin();
updateAuxweapon();