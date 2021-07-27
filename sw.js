import * as workerio from 'workerio';
import * as nearSeedPhrase from 'near-seed-phrase';

self.addEventListener('init', () => {
    console.log('sw initialized');
});


workerio.publishInterface(self, 'keysService', {
    generateKeys: () => new Promise((resolve, reject) => {
        try {
            const { seedPhrase, publicKey, secretKey } = generateSeedPhase.generateSeedPhrase();
            resolve({
                seedPhrase, publicKey, secretKey
            });
        } catch (e) {
            reject(e);
        }
    }),
});

// vim:ft=javascript:sw=4:sts=4:et
