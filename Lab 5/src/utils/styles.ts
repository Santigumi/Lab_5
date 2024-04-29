export const loadCss = (elRef: HTMLElement, stylesApp: string) => {
    const css = elRef.ownerDocument.createElement('style');
    css.innerHTML = stylesApp;
    elRef.shadowRoot?.appendChild(css)
};