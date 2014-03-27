var crypto = require('crypto');

// from npm
var sha1mod = require('sha1');

var expected = '5ba56e0dbb7cc433d5b98ab3cbbf5e0d92954ff1';

var raw = 'Ly8gVHlwZSBkZWZpbml0aW9ucyBmb3IgQXN5bmMgMC4xLjIzDQovLyBQcm9q\nZWN0OiBodHRwczovL2dpdGh1Yi5jb20vY2FvbGFuL2FzeW5jDQovLyBEZWZp\nbml0aW9ucyBieTogQm9yaXMgWWFua292IDxodHRwczovL2dpdGh1Yi5jb20v\nYm9yaXN5YW5rb3YvPg0KLy8gRGVmaW5pdGlvbnM6IGh0dHBzOi8vZ2l0aHVi\nLmNvbS9ib3Jpc3lhbmtvdi9EZWZpbml0ZWx5VHlwZWQNCg0KaW50ZXJmYWNl\nIEFzeW5jTXVsdGlwbGVSZXN1bHRzQ2FsbGJhY2s8VD4geyAoZXJyOiBzdHJp\nbmcsIHJlc3VsdHM6IFRbXSk6IGFueTsgfQ0KaW50ZXJmYWNlIEFzeW5jU2lu\nZ2xlUmVzdWx0Q2FsbGJhY2s8VD4geyAoZXJyOiBzdHJpbmcsIHJlc3VsdDog\nVCk6IGFueTsgfQ0KaW50ZXJmYWNlIEFzeW5jVGltZXNDYWxsYmFjazxUPiB7\nIChuOiBudW1iZXIsIGNhbGxiYWNrOiBBc3luY011bHRpcGxlUmVzdWx0c0Nh\nbGxiYWNrPFQ+KTogdm9pZDsgfQ0KaW50ZXJmYWNlIEFzeW5jSXRlcmF0b3I8\nVD4geyAoaXRlbTogVCwgY2FsbGJhY2s6IEFzeW5jTXVsdGlwbGVSZXN1bHRz\nQ2FsbGJhY2s8VD4pOiB2b2lkOyB9DQppbnRlcmZhY2UgQXN5bmNNZW1vSXRl\ncmF0b3I8VD4geyAobWVtbzogVCwgaXRlbTogVCwgY2FsbGJhY2s6IEFzeW5j\nU2luZ2xlUmVzdWx0Q2FsbGJhY2s8VD4pOiB2b2lkOyB9DQppbnRlcmZhY2Ug\nQXN5bmNXb3JrZXI8VD4geyAodGFzazogVCwgY2FsbGJhY2s6IEZ1bmN0aW9u\nKTogdm9pZDsgfQ0KDQppbnRlcmZhY2UgQXN5bmNRdWV1ZTxUPiB7DQogICAg\nbGVuZ3RoKCk6IG51bWJlcjsNCiAgICBjb25jdXJyZW5jeTogbnVtYmVyOw0K\nICAgIHB1c2godGFzazogVCwgY2FsbGJhY2s6IEFzeW5jTXVsdGlwbGVSZXN1\nbHRzQ2FsbGJhY2s8VD4pOiB2b2lkOw0KICAgIHNhdHVyYXRlZDogQXN5bmNN\ndWx0aXBsZVJlc3VsdHNDYWxsYmFjazxUPjsNCiAgICBlbXB0eTogQXN5bmNN\ndWx0aXBsZVJlc3VsdHNDYWxsYmFjazxUPjsNCiAgICBkcmFpbjogQXN5bmNN\ndWx0aXBsZVJlc3VsdHNDYWxsYmFjazxUPjsNCn0NCg0KaW50ZXJmYWNlIEFz\neW5jIHsNCg0KICAgIC8vIENvbGxlY3Rpb25zDQogICAgZm9yRWFjaDxUPihh\ncnI6IFRbXSwgaXRlcmF0b3I6IEFzeW5jSXRlcmF0b3I8VD4sIGNhbGxiYWNr\nOiBBc3luY011bHRpcGxlUmVzdWx0c0NhbGxiYWNrPFQ+KTogdm9pZDsNCiAg\nICBmb3JFYWNoU2VyaWVzPFQ+KGFycjogVFtdLCBpdGVyYXRvcjogQXN5bmNJ\ndGVyYXRvcjxUPiwgY2FsbGJhY2s6IEFzeW5jTXVsdGlwbGVSZXN1bHRzQ2Fs\nbGJhY2s8VD4pOiB2b2lkOw0KICAgIGZvckVhY2hMaW1pdDxUPihhcnI6IFRb\nXSwgbGltaXQ6IG51bWJlciwgaXRlcmF0b3I6IEFzeW5jSXRlcmF0b3I8VD4s\nIGNhbGxiYWNrOiBBc3luY011bHRpcGxlUmVzdWx0c0NhbGxiYWNrPFQ+KTog\ndm9pZDsNCiAgICBtYXA8VD4oYXJyOiBUW10sIGl0ZXJhdG9yOiBBc3luY0l0\nZXJhdG9yPFQ+LCBjYWxsYmFjazogQXN5bmNNdWx0aXBsZVJlc3VsdHNDYWxs\nYmFjazxUPik7DQogICAgbWFwU2VyaWVzPFQ+KGFycjogVFtdLCBpdGVyYXRv\ncjogQXN5bmNJdGVyYXRvcjxUPiwgY2FsbGJhY2s6IEFzeW5jTXVsdGlwbGVS\nZXN1bHRzQ2FsbGJhY2s8VD4pOw0KICAgIGZpbHRlcjxUPihhcnI6IFRbXSwg\naXRlcmF0b3I6IEFzeW5jSXRlcmF0b3I8VD4sIGNhbGxiYWNrOiBBc3luY011\nbHRpcGxlUmVzdWx0c0NhbGxiYWNrPFQ+KTsNCiAgICBzZWxlY3Q8VD4oYXJy\nOiBUW10sIGl0ZXJhdG9yOiBBc3luY0l0ZXJhdG9yPFQ+LCBjYWxsYmFjazog\nQXN5bmNNdWx0aXBsZVJlc3VsdHNDYWxsYmFjazxUPik7DQogICAgZmlsdGVy\nU2VyaWVzPFQ+KGFycjogVFtdLCBpdGVyYXRvcjogQXN5bmNJdGVyYXRvcjxU\nPiwgY2FsbGJhY2s6IEFzeW5jTXVsdGlwbGVSZXN1bHRzQ2FsbGJhY2s8VD4p\nOw0KICAgIHNlbGVjdFNlcmllczxUPihhcnI6IFRbXSwgaXRlcmF0b3I6IEFz\neW5jSXRlcmF0b3I8VD4sIGNhbGxiYWNrOiBBc3luY011bHRpcGxlUmVzdWx0\nc0NhbGxiYWNrPFQ+KTsNCiAgICByZWplY3Q8VD4oYXJyOiBUW10sIGl0ZXJh\ndG9yOiBBc3luY0l0ZXJhdG9yPFQ+LCBjYWxsYmFjazogQXN5bmNNdWx0aXBs\nZVJlc3VsdHNDYWxsYmFjazxUPik7DQogICAgcmVqZWN0U2VyaWVzPFQ+KGFy\ncjogVFtdLCBpdGVyYXRvcjogQXN5bmNJdGVyYXRvcjxUPiwgY2FsbGJhY2s6\nIEFzeW5jTXVsdGlwbGVSZXN1bHRzQ2FsbGJhY2s8VD4pOw0KICAgIHJlZHVj\nZTxUPihhcnI6IFRbXSwgbWVtbzogVCwgaXRlcmF0b3I6IEFzeW5jTWVtb0l0\nZXJhdG9yPFQ+LCBjYWxsYmFjazogQXN5bmNTaW5nbGVSZXN1bHRDYWxsYmFj\nazxUPik7DQogICAgaW5qZWN0PFQ+KGFycjogVFtdLCBtZW1vOiBULCBpdGVy\nYXRvcjogQXN5bmNNZW1vSXRlcmF0b3I8VD4sIGNhbGxiYWNrOiBBc3luY1Np\nbmdsZVJlc3VsdENhbGxiYWNrPFQ+KTsNCiAgICBmb2xkbDxUPihhcnI6IFRb\nXSwgbWVtbzogVCwgaXRlcmF0b3I6IEFzeW5jTWVtb0l0ZXJhdG9yPFQ+LCBj\nYWxsYmFjazogQXN5bmNTaW5nbGVSZXN1bHRDYWxsYmFjazxUPik7DQogICAg\ncmVkdWNlUmlnaHQ8VD4oYXJyOiBUW10sIG1lbW86IFQsIGl0ZXJhdG9yOiBB\nc3luY01lbW9JdGVyYXRvcjxUPiwgY2FsbGJhY2s6IEFzeW5jU2luZ2xlUmVz\ndWx0Q2FsbGJhY2s8VD4pOw0KICAgIGZvbGRyPFQsIFU+KGFycjogVFtdLCBt\nZW1vOiBULCBpdGVyYXRvcjogQXN5bmNNZW1vSXRlcmF0b3I8VD4sIGNhbGxi\nYWNrOiBBc3luY1NpbmdsZVJlc3VsdENhbGxiYWNrPFQ+KTsNCiAgICBkZXRl\nY3Q8VD4oYXJyOiBUW10sIGl0ZXJhdG9yOiBBc3luY0l0ZXJhdG9yPFQ+LCBj\nYWxsYmFjazogQXN5bmNNdWx0aXBsZVJlc3VsdHNDYWxsYmFjazxUPik7DQog\nICAgZGV0ZWN0U2VyaWVzPFQ+KGFycjogVFtdLCBpdGVyYXRvcjogQXN5bmNJ\ndGVyYXRvcjxUPiwgY2FsbGJhY2s6IEFzeW5jTXVsdGlwbGVSZXN1bHRzQ2Fs\nbGJhY2s8VD4pOw0KICAgIHNvcnRCeTxUPihhcnI6IFRbXSwgaXRlcmF0b3I6\nIEFzeW5jSXRlcmF0b3I8VD4sIGNhbGxiYWNrOiBBc3luY011bHRpcGxlUmVz\ndWx0c0NhbGxiYWNrPFQ+KTsNCiAgICBzb21lPFQ+KGFycjogVFtdLCBpdGVy\nYXRvcjogQXN5bmNJdGVyYXRvcjxUPiwgY2FsbGJhY2s6IEFzeW5jTXVsdGlw\nbGVSZXN1bHRzQ2FsbGJhY2s8VD4pOw0KICAgIGFueTxUPihhcnI6IFRbXSwg\naXRlcmF0b3I6IEFzeW5jSXRlcmF0b3I8VD4sIGNhbGxiYWNrOiBBc3luY011\nbHRpcGxlUmVzdWx0c0NhbGxiYWNrPFQ+KTsNCiAgICBldmVyeTxUPihhcnI6\nIFRbXSwgaXRlcmF0b3I6IEFzeW5jSXRlcmF0b3I8VD4sIGNhbGxiYWNrOiAo\ncmVzdWx0OiBib29sZWFuKSA9PiBhbnkpOw0KICAgIGFsbDxUPihhcnI6IFRb\nXSwgaXRlcmF0b3I6IEFzeW5jSXRlcmF0b3I8VD4sIGNhbGxiYWNrOiAocmVz\ndWx0OiBib29sZWFuKSA9PiBhbnkpOw0KICAgIGNvbmNhdDxUPihhcnI6IFRb\nXSwgaXRlcmF0b3I6IEFzeW5jSXRlcmF0b3I8VD4sIGNhbGxiYWNrOiBBc3lu\nY011bHRpcGxlUmVzdWx0c0NhbGxiYWNrPFQ+KTsNCiAgICBjb25jYXRTZXJp\nZXM8VD4oYXJyOiBUW10sIGl0ZXJhdG9yOiBBc3luY0l0ZXJhdG9yPFQ+LCBj\nYWxsYmFjazogQXN5bmNNdWx0aXBsZVJlc3VsdHNDYWxsYmFjazxUPik7DQoN\nCiAgICAvLyBDb250cm9sIEZsb3cNCiAgICBzZXJpZXM8VD4odGFza3M6IFRb\nXSwgY2FsbGJhY2s/OiBBc3luY011bHRpcGxlUmVzdWx0c0NhbGxiYWNrPFQ+\nKTogdm9pZDsNCiAgICBzZXJpZXM8VD4odGFza3M6IFQsIGNhbGxiYWNrPzog\nQXN5bmNNdWx0aXBsZVJlc3VsdHNDYWxsYmFjazxUPik6IHZvaWQ7DQogICAg\ncGFyYWxsZWw8VD4odGFza3M6IFRbXSwgY2FsbGJhY2s/OiBBc3luY011bHRp\ncGxlUmVzdWx0c0NhbGxiYWNrPFQ+KTogdm9pZDsNCiAgICBwYXJhbGxlbDxU\nPih0YXNrczogVCwgY2FsbGJhY2s/OiBBc3luY011bHRpcGxlUmVzdWx0c0Nh\nbGxiYWNrPFQ+KTogdm9pZDsNCiAgICB3aGlsc3QodGVzdDogRnVuY3Rpb24s\nIGZuOiBGdW5jdGlvbiwgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZDsNCiAg\nICB1bnRpbCh0ZXN0OiBGdW5jdGlvbiwgZm46IEZ1bmN0aW9uLCBjYWxsYmFj\nazogRnVuY3Rpb24pOiB2b2lkOw0KICAgIHdhdGVyZmFsbDxUPih0YXNrczog\nVFtdLCBjYWxsYmFjaz86IEFzeW5jTXVsdGlwbGVSZXN1bHRzQ2FsbGJhY2s8\nVD4pOiB2b2lkOw0KICAgIHdhdGVyZmFsbDxUPih0YXNrczogVCwgY2FsbGJh\nY2s/OiBBc3luY011bHRpcGxlUmVzdWx0c0NhbGxiYWNrPFQ+KTogdm9pZDsN\nCiAgICBxdWV1ZTxUPih3b3JrZXI6IEFzeW5jV29ya2VyPFQ+LCBjb25jdXJy\nZW5jeTogbnVtYmVyKTogQXN5bmNRdWV1ZTxUPjsNCiAgICAvLyBhdXRvKHRh\nc2tzOiBhbnlbXSwgY2FsbGJhY2s/OiBBc3luY011bHRpcGxlUmVzdWx0c0Nh\nbGxiYWNrPFQ+KTogdm9pZDsNCiAgICBhdXRvKHRhc2tzOiBhbnksIGNhbGxi\nYWNrPzogQXN5bmNNdWx0aXBsZVJlc3VsdHNDYWxsYmFjazxhbnk+KTogdm9p\nZDsNCiAgICBpdGVyYXRvcih0YXNrczogRnVuY3Rpb25bXSk6IEZ1bmN0aW9u\nOw0KICAgIGFwcGx5KGZuOiBGdW5jdGlvbiwgLi4uYXJndW1lbnRzOiBhbnlb\nXSk6IHZvaWQ7DQogICAgbmV4dFRpY2s8VD4oY2FsbGJhY2s6IEZ1bmN0aW9u\nKTogdm9pZDsNCg0KICAgIHRpbWVzPFQ+IChuOiBudW1iZXIsIGNhbGxiYWNr\nOiBBc3luY1RpbWVzQ2FsbGJhY2s8VD4pOiB2b2lkOw0KICAgIHRpbWVzU2Vy\naWVzPFQ+IChuOiBudW1iZXIsIGNhbGxiYWNrOiBBc3luY1RpbWVzQ2FsbGJh\nY2s8VD4pOiB2b2lkOw0KDQogICAgLy8gVXRpbHMNCiAgICBtZW1vaXplKGZu\nOiBGdW5jdGlvbiwgaGFzaGVyPzogRnVuY3Rpb24pOiBGdW5jdGlvbjsNCiAg\nICB1bm1lbW9pemUoZm46IEZ1bmN0aW9uKTogRnVuY3Rpb247DQogICAgbG9n\nKGZuOiBGdW5jdGlvbiwgLi4uYXJndW1lbnRzOiBhbnlbXSk6IHZvaWQ7DQog\nICAgZGlyKGZuOiBGdW5jdGlvbiwgLi4uYXJndW1lbnRzOiBhbnlbXSk6IHZv\naWQ7DQogICAgbm9Db25mbGljdCgpOiBBc3luYzsNCn0NCg0KZGVjbGFyZSB2\nYXIgYXN5bmM6IEFzeW5jOw0KDQpkZWNsYXJlIG1vZHVsZSAiYXN5bmMiIHsN\nCglleHBvcnQgPSBhc3luYzsNCn0=\n';

var data = new Buffer(raw, 'base64');

var have = [];
var fail = false;

function step() {
	for (var i = 0; i < 200; i++) {
		var tmp = {
			hash: crypto.createHash('sha1').update('blob ' + data.length + '\0').update(data).digest('hex'),
			conc: crypto.createHash('sha1').update(Buffer.concat([new Buffer('blob ' + data.length + '\0'), data])).digest('hex'),
			sha1: sha1mod(Buffer.concat([new Buffer('blob ' + data.length + '\0'), data]))
		};

		if (have.indexOf(tmp.hash) < 0) {
			have.push(tmp.hash);
			console.log(tmp);
			if (tmp.hash !== expected) {
				fail = true;
			}
		}
	}
}

console.log('expected ' + expected);

setTimeout(step, 100);
setTimeout(step, 200);
setTimeout(step, 300);
setTimeout(step, 400);
setTimeout(function() {
	if (fail) {
		process.exit(1);
	}
}, 500);