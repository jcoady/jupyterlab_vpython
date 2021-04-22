import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the vpython extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'vpython:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension vpython is activated!');
  }
};

export default extension;
