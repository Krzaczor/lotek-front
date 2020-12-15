export const mediaWidth = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560,
}

export const device = {
    mobileS: `(min-width: ${mediaWidth.mobileS}px)`,
    mobileM: `(min-width: ${mediaWidth.mobileM}px)`,
    mobileL: `(min-width: ${mediaWidth.mobileL}px)`,
    tablet: `(min-width: ${mediaWidth.tablet}px)`,
    laptop: `(min-width: ${mediaWidth.laptop}px)`,
    laptopL: `(min-width: ${mediaWidth.laptopL}px)`,
    desktop: `(min-width: ${mediaWidth.desktop}px)`,
};

export const colors = {
    fontDark: '#000',
    fontLight: '#fff',
    lines: '#e0e0e0',
    background: '#fff',
    primary: '#01a0e2',
    secondary: '#ffd105',
    danger: '#b00020',
};
