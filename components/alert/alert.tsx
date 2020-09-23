import React from 'react';
import t from 'prop-types';
import clsNames from 'classnames'
import { AlertProps} from './interface';

const prefixCls = 'gy-alert';

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
  <div
    className={
      clsNames(
        prefixCls,
        {
          [`${prefixCls}-${kind}`]: kind,
        }
      )
    } 
    {...rest}
  >
    {children}
  </div>
);

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Alert;