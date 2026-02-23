import {css} from 'lit';

export const calcSubStyles = css`
  .width-50 {
    width: calc(50% - 1rem);
    margin-bottom: 0.5em;
  }
  .width-30 {
    width: 30%;
    margin-bottom: 0.5em;
  }
  md-outlined-text-field {
    --md-outlined-field-disabled-content-opacity: 1;
  }
`;
