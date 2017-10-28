import * as React from 'react';

import { Button } from './Bulma/Button';

export class Selection extends React.Component {
  public render(): JSX.Element {
    return <div>
      <Button large>I'm a person</Button>
      <Button large>I'm a company</Button>
    </div>;
  }
}
