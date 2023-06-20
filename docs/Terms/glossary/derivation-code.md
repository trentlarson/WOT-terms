## Definition

To properly extract and use the [public key](public-key-infrastructure.md) embedded in a [self-certifying identifier](self-certifying-identifier.md) we need to know the cryptographic _signing scheme_ used by the [key pair](key-pair.md). KERI includes this very compactly in the identifier, by replacing the pad character (a character used to fill a void to able to always end up with a fixed length public key) with a special character that encodes the derivation process. We call this the _derivation code_.

### Example

> For example suppose that the 44 character Base-64 with trailing pad character for the public key is as follows:
> `F5pxRJP6THrUtlDdhh07hJEDKrJxkcR9m5u1xs33bhp=`
> If B is the value of the derivation code then the resultant self-contained string is as follows:
> `BF5pxRJP6THrUtlDdhh07hJEDKrJxkcR9m5u1xs33bhp`

### Relation with KERI

All crypto material appears in `KERI` in a fully [qualified](qualified.md) representation. This includes a derivation code prepended to the crypto-material.
![](https://github.com/WebOfTrust/keri/blob/main/images/derivation-code.png)

## Beware

[Key derivation functions](https://en.wikipedia.org/wiki/Key_derivation_function) are not related to the pre-pended derivation codes used in KERI.