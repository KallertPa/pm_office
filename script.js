let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('pumpkin', () => {
    WA.openPopup("pumpkin_popup", 'Bring me Giuliano!', [{}]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('pumpkin', () => {
    helloWorldPopup.close();
});