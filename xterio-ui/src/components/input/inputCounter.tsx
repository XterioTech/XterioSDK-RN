import { Pressable, View } from 'react-native';
import { stylesCounter } from './styles';
import type { InputCounterProps } from './types';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { IconMinus, IconPlus } from 'xterio-icons';
import Input from '.';

const InputCounter = (props: InputCounterProps) => {
  const {
    value = 1,
    defaultValue = 1,
    min,
    max = Number.MAX_SAFE_INTEGER,
    step = 1,
    type = 'int',
    onChange,
    style,
    disabled,
    inputTextStyle,
    containerStyle,
    iconSize,
    iconColor = '#9598B9',
    iconDisabledColor = '#9598B966',
    ...rest
  } = props;

  const [inputValue, setInputValue] = useState(`${value || defaultValue}`);

  const [nu, setNu] = useState(value || defaultValue);

  const minDisabled = useMemo(
    () => disabled || (min && nu <= min),
    [disabled, min, nu]
  );
  const maxDisabled = useMemo(
    () => disabled || (max && nu >= max),
    [disabled, max, nu]
  );

  const _update = useCallback(
    (n: number) => {
      setNu(n);
      setInputValue(n.toString());
      onChange?.(n);
      // console.log('////n', n);
    },
    [onChange]
  );

  const _minus = useCallback(() => {
    let n = 0;
    if (!nu) {
      n = min ?? 0;
    } else if (min && Number(nu) - step < min) {
      n = min;
    } else {
      n = Number(nu) - step;
    }
    _update(n);
  }, [_update, min, nu, step]);

  const _plus = useCallback(() => {
    let n = 0;
    if (!nu) {
      n = min ?? 0;
    } else if (max && Number(nu) + step > max) {
      n = max;
    } else {
      n = Number(nu) + step;
    }
    _update(n);
  }, [_update, max, min, nu, step]);

  const _onBlur = useCallback(
    (data?: string) => {
      let val = '';
      if (type === 'int') {
        val = data?.replace(/[^0-9]/g, '') || '';
      } else {
        val = data?.replace(/[^0-9.]/g, '') || '';
        const parts = val.split('.');
        if (parts.length > 2) {
          val = parts[0] + '.' + parts.slice(1).join('').replace(/\./g, '');
        }
      }

      let n: number;
      if (!val) {
        n = min ? min : 0;
      } else {
        n = Number(val);
        n = max ? Math.min(n, max) : n;
        n = min ? Math.max(n, min) : n;
      }
      _update(n);
    },
    [_update, max, min, type]
  );

  useEffect(() => {
    let n = value;
    if (min) {
      n = Math.max(n, min);
    }
    if (max) {
      n = Math.min(n, max);
    }
    setNu(n);
    setInputValue(n.toString());
  }, [max, min, value]);

  const [initHeight, setInitHeight] = useState(0);
  const _containerRef = useRef<View>(null);
  const updateLayout = useCallback(() => {
    // ✅ sync call to read layout
    _containerRef.current?.measureInWindow((_x, _y, _width, height) => {
      setInitHeight(height);
    });
  }, []);
  useLayoutEffect(() => {
    updateLayout();
  }, [updateLayout]);

  return (
    <View
      style={[stylesCounter.container, { borderRadius: initHeight }, style]}
      ref={_containerRef}
      onLayout={updateLayout}
    >
      <Pressable
        disabled={!!minDisabled}
        style={[stylesCounter.icon, { width: iconSize, height: iconSize }]}
        onPress={_minus}
      >
        <IconMinus
          color={minDisabled ? iconDisabledColor : iconColor}
          size={iconSize}
        />
      </Pressable>
      <Input
        style={stylesCounter.input}
        containerStyle={[stylesCounter.inputContainer, containerStyle]}
        inputTextStyle={[stylesCounter.inputText, inputTextStyle]}
        keyboardType={'number-pad'}
        value={inputValue}
        onBlur={_onBlur}
        disabled={disabled}
        onKeyPress={(e) => {
          if (e.nativeEvent.key === 'Enter') {
            _onBlur();
          }
        }}
        onChangeText={(val) => {
          if (
            val === '' ||
            (val && type === 'int' && /^-?\d*$/.test(val)) ||
            (val && type === 'float' && /^-?\d*\.?\d*$/.test(val))
          ) {
            setInputValue(val);
          } else {
            // console.log('////dd', val);
          }
          // setInputValue(val || '');
        }}
        {...rest}
      />
      <Pressable
        disabled={!!maxDisabled}
        style={[stylesCounter.icon, { width: iconSize, height: iconSize }]}
        onPress={_plus}
      >
        <IconPlus
          color={maxDisabled ? iconDisabledColor : iconColor}
          size={iconSize}
        />
      </Pressable>
    </View>
  );
};

export default InputCounter;
