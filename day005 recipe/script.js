let mode = "light";
function mood()
{
let moon =  document.querySelector(".ph-moon");
let sun =  document.querySelector(".ph-sun");
let root = document.documentElement.style;
    if(mode == "light")
    {
        moon.style.display = "none";
        sun.style.display = "block";
        root.setProperty('--color-secondary', 'black');
        root.setProperty('--color-tertiary', 'white');
        root.setProperty('--color-text', '#f8f9fa');
        root.setProperty('--color-text-light', '#1e1f26');
        mode = "dark";
    }
    else
    {
        moon.style.display = "block";
        sun.style.display = "none";
        root.setProperty('--color-secondary', 'white');
        root.setProperty('--color-tertiary', 'black');
        root.setProperty('--color-text', '#1e1f26');
        root.setProperty('--color-text-light', '#f8f9fa');
        mode = "light";
    }
}