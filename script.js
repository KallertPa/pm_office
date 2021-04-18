let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('pumpkin', () => {
    WA.openPopup("pumpkin_popup", 'Bring me Giuliano!', [
        {
            label: "Close",
            className: "primary",
            callback: (popup) => {
                // Close the popup when the "Close" button is pressed.
                popup.close();
            }
        }
    ]);
});

// Close the popup when we leave the zone.
WA.onLeaveZone('pumpkin', () => {
    helloWorldPopup.close();
});