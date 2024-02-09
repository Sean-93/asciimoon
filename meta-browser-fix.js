const metaBrowserFix = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Consolidated condition
    if (/android/i.test(userAgent) && (userAgent.includes('FBAN') || userAgent.includes('FBAV') || userAgent.includes('Instagram'))) {
        document.getElementById("moonContainer").style.transform = "scale(0.25)";
        document.querySelector("pre").style.transform = "scale(0.25)";
    }
};

// Running the detection function
metaBrowserFix();
