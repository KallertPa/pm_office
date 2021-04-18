
// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('pumpkin', () => {
    WA.sendChatMessage("Bring me Giuliano!", 'Pumpkin Man');
});

// Close the popup when we leave the zone.
WA.onLeaveZone('pumpkin', () => {
    WA.sendChatMessage("Do not return without him!", 'Pumpkin Man');
});