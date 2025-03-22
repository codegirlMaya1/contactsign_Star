declare module 'styled-jsx' {
    import * as React from 'react';
  
    export interface StyleProps {
      children: string;
      jsx?: boolean;
      global?: boolean;
    }
  
    export default class Style extends React.Component<StyleProps> {}
  }