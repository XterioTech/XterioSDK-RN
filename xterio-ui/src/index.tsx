export function multiply(a: number, b: number): number {
  return a * b;
}

export * from './components';

import { cssInterop } from 'nativewind';
import {
  XButton,
  XCheckbox,
  XCollapsible,
  XCutCornerTip,
  XGradientCard,
  XGradientText,
  XImage,
  XInput,
  XInputCounter,
  XInputRange,
  XLoading,
  XModal,
  XMultiText,
  XOverlay,
  XPager,
  XPopOver,
  XScrollNumber,
  XSelect,
  XStepProgress,
  XSwiper,
  XSwitch,
  XTab,
  XToolTip,
} from './components';

cssInterop(XButton, {
  className: 'style',
  titleClassName: {
    target: 'titleStyle',
    nativeStyleToProp: {
      fontSize: 'fontSize',
      fontStyle: 'fontStyle',
      fontWeight: 'fontWeight',
      fontFamily: 'fontFamily',
    },
  },
});
cssInterop(XCheckbox, { className: 'style' });
cssInterop(XCollapsible, {
  className: 'style',
  titleClassName: 'titleStyle',
  contentClassName: 'contentStyle',
  textClassName: 'textStyle',
});
cssInterop(XCutCornerTip, { className: 'style', textClassName: 'textStyle' });
cssInterop(XGradientText, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      fontSize: 'fontSize',
      fontStyle: 'fontStyle',
      fontWeight: 'fontWeight',
      fontFamily: 'fontFamily',
    },
  },
});
cssInterop(XGradientCard, { className: 'style' });
cssInterop(XImage, { className: 'style' });
cssInterop(XInput, {
  className: 'style',
  containerClassName: 'containerStyle',
  inputTextClassName: 'inputTextStyle',
});
cssInterop(XInputCounter, {
  className: 'style',
  containerClassName: 'containerStyle',
  inputTextClassName: 'inputTextStyle',
});
cssInterop(XInputRange, {
  className: 'style',
  containerClassName: 'containerStyle',
  inputTextClassName: 'inputTextStyle',
});
cssInterop(XLoading, {
  className: 'style',
});
cssInterop(XMultiText, {
  className: 'style',
  // moreClassName: 'moreStyle',
  moreClassName: {
    target: 'moreStyle',
    nativeStyleToProp: {
      color: 'moreTextColor',
    },
  },
});
cssInterop(XPager, {
  className: 'style',
  itemClassName: {
    target: 'itemStyle',
    nativeStyleToProp: {
      color: 'textColor',
    },
  },
  selectItemClassName: {
    target: 'selectItemStyle',
    nativeStyleToProp: {
      color: 'selectTextColor',
    },
  },
  arrowClassName: 'arrowStyle',
});

cssInterop(XOverlay, {
  backdropClassName: 'backdropStyle',
  containerClassName: 'containerStyle',
  overlayClassName: 'overlayStyle',
});

cssInterop(XModal, {
  backdropClassName: 'backdropStyle',
  containerClassName: 'containerStyle',
  overlayClassName: 'overlayStyle',
  buttonsClassName: 'buttonsStyle',
  headerClassName: 'headerStyle',
  titleClassName: 'titleStyle',
  closeClassName: 'closeStyle',
});

cssInterop(XPopOver, {
  triggerClassName: 'triggerStyle',
  contentClassName: 'contentStyle',
  arrowClassName: 'arrowStyle',
});

cssInterop(XToolTip, {
  triggerClassName: 'triggerStyle',
  contentClassName: 'contentStyle',
  arrowClassName: 'arrowStyle',
  textClassName: 'textStyle',
});

cssInterop(XSelect, {
  triggerClassName: 'triggerStyle',
  rowClassName: 'rowStyle',
  rowSelectClassName: 'rowSelectStyle',
});

cssInterop(XScrollNumber, {
  className: 'style',
  itemClassName: 'itemStyle',
  textClassName: 'textStyle',
});
cssInterop(XStepProgress, {
  className: 'style',
  itemClassName: 'itemStyle',
});
cssInterop(XSwiper, {
  className: 'style',
  contentContainerClassName: 'contentContainerStyle',
});
cssInterop(XSwitch, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      padding: 'padding',
    },
  },
});
cssInterop(XTab, {
  className: 'style',
  indicatorClassName: 'indicatorStyle',
  activeIndicatorClassName: {
    target: 'activeIndicatorStyle',
    nativeStyleToProp: {
      width: 'indicatorWidth',
    },
  },
  itemClassName: 'itemStyle',
  activeItemClassName: 'activeItemStyle',
  lableClassName: 'labelStyle',
  activeLabelClassName: 'activeLabelStyle',
});
