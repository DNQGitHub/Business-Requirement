const fs = require('fs-extra');
const childProcess = require('child_process');

const copiedFiles = {
    './src/infrastructure/ldap/certs/certificate.pem': './dist/infrastructure/ldap/certs/certificate.pem',
    './src/infrastructure/ldap/certs/privatekey.pem': './dist/infrastructure/ldap/certs/privatekey.pem',
};

try {
    fs.removeSync('./dist/');
    
    for( const srcFilename in copiedFiles ) {
        const destFilename = copiedFiles[ srcFilename ];
        
        if( fs.existsSync( srcFilename ) ) {
            const destPath = destFilename.substring( 0, destFilename.lastIndexOf('/') );

            if( fs.pathExistsSync( destPath ) === false )
                fs.mkdirSync( destPath, { recursive: true } );

            fs.copyFileSync( srcFilename, destFilename );
        }
    }

    const proc = childProcess.exec('tsc --build tsconfig.prod.json');
    proc.on('close', (code) => {
        if (code !== 0) {
            throw Error("Build failed")
        }
    })
} catch (err) {
    console.log(err);
}
