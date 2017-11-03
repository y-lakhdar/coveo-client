// External packages
import * as fs from 'fs-extra';
// Internal packages
import { config } from './../../config/index';

export class FileUtils {
  static writeFile(outputFile: string, data: any, errCallback: (err: NodeJS.ErrnoException) => void): void {
    fs.ensureDir(`${config.workingDirectory}output`)
      .then(() => {
        fs.writeFile(outputFile, data, errCallback);
      });
  }

  static writeJson(outputFile: string, data: any, errCallback: (err: NodeJS.ErrnoException) => void): Promise<void> {
    return fs.writeJSON(outputFile, data, { spaces: 2 });
  }
}
