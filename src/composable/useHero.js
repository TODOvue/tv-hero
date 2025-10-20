import { computed } from "vue";

const useHero = (props, emit) => {
  const handleClick = () => {
    emit("clickButton");
  };
  
  const handleClickSecondary = () => {
    emit("clickSecondaryButton");
  };
  
  const hero = computed(() => {
    const { configHero } = props;
    if (!configHero) return null;
    return {
      image: configHero.image,
      alt: configHero.alt,
      title: configHero.title,
      description: configHero.description,
      button: configHero.button,
      buttonSecondary: configHero.buttonSecondary,
    };
  });
  
  const _adjustColor = (colorHex, factor) => {
    if (!colorHex) return colorHex;
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorHex);
    if (!rgb) return colorHex;
    
    let r = parseInt(rgb[1], 16);
    let g = parseInt(rgb[2], 16);
    let b = parseInt(rgb[3], 16);
    
    r = Math.min(Math.floor(r * factor), 255);
    g = Math.min(Math.floor(g * factor), 255);
    b = Math.min(Math.floor(b * factor), 255);
    
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };
  
  const _getCustomStyle = (customHero, bgKey, colorKey) => {
    if (!customHero) return {};
    if (customHero[bgKey] || customHero[colorKey]) {
      return {
        backgroundColor: customHero[bgKey],
        color: customHero[colorKey],
      };
    }
    return {};
  };
  
  const _getCustomStyleAfter = (customHero, bgKey) => {
    if (!customHero || !customHero[bgKey]) return {};
    
    return {
      backgroundColor: _adjustColor(customHero[bgKey], 0.9),
      boxShadow: `0 0 10px 0 ${_adjustColor(customHero[bgKey], 1.1)}`,
    };
  };
  
  const _customHero = computed(() => {
    return _getCustomStyle(props.customHero, "bgBody", "colorBody");
  });
  
  const _customButton = computed(() => {
    return _getCustomStyle(props.customHero, "bgButton", "colorButton");
  });
  
  const _customButtonSecondary = computed(() => {
    return _getCustomStyle(
      props.customHero,
      "bgButtonSecondary",
      "colorButtonSecondary"
    );
  });
  
  const _customAfter = computed(() => {
    return _getCustomStyleAfter(props.customHero, "bgBody");
  });
  
  const custom = computed(() => {
    const { customHero } = props;
    if (!customHero) return {};
    return {
      customHero: _customHero.value,
      bgAfter: _customAfter.value,
      customButton: _customButton.value,
      customButtonSecondary: _customButtonSecondary.value,
    };
  });
  
  return {
    handleClick,
    handleClickSecondary,
    custom,
    hero,
  };
};

export default useHero;
