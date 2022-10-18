# Mental model of the KERI suite

To comprehend the *reason to be* for KERI, we need to create a frame of reference, a mental model. Why this in necessary can be best illustrated with an example.
> Example:
> Let’s suggest you have mental model that says the *earth is at the center of the universe*, and the sun and planets somehow revolve around it. Further development of the model allows you to compute planetary positions, and do some fortune telling and predict tides.
However, the mental model changes drastically when you would state that the *sun, rather than the earth, is at the centre of the universe*.  Or even more far-reaching: the Big Bang is the middle of the universe. **Changing one’s perspective can have very profound consequences**, without changing the universe itself. That’s what mental models are all about.

More on this can be read here: eSSIF-lab [mental models](https://essif-lab.github.io/framework/docs/terms/pattern).

## Authentic web
If we wrap up the definition of the authentic web [here](https://github.com/trustoverip/acdc/wiki/authentic-web) we could say:

### The authentic web is the internet as a whole giant verifiable data structure.

## The meaning of a technical summary

How to make any data authentic using the KERI suite? -> create and append to an ever growing _Authentic Web_ where everything is signed and connected. 

As often filmmakers are visionairs: an anology for the authentic web is **Eywa** from the *Avatar* film: the tree of truth and interconnection.

<img src="https://hackmd.io/_uploads/BkZxirnXj.png)" width="600">

Back with our feet on the ground of worldly realm:

The authentic Web as **a verifiable data structure** is built from **signed hash chained content addressable data**.

Now try to convince your date to go to that movie.

What does this mean?

Solves the hard problem of *zero-trust* architectures, which is [signed-at-rest](https://github.com/trustoverip/acdc/wiki/authentic-web). Conversely, _Signed in motion_ is relatively easy because we can use ephemeral identifiers with ephemeral key state for tokens

*Key state at rest* is hard because have to solve key rotation problem for persistent identifiers
            - signed data at rest using key state at rest of persistent identifiers
                - Use ephemeral identifiers as auxiliaries to persistent identifiers
                - Ambient verifiability:  everything can be verified offline, even copies.


## Mental model of Verifiable Data Structures all the way down

Or: the inner working of 'Eywa'

- Genealized hash chained signed data structures (provenanceable)
    - hashed list. 
    - hash of concatenated hashes in list
    - hash of cat blineded hashes in list
    - Hash Graph
        - Hash DAG
        - Custom Hash DAG
        - Merkle root hash (binary tree) Sparse Merkle Tree
        - Patricia Merkle (Trie) root hash 
    - Signed Hash Graph
        - Signed Hash DAG
            - ACDC is a type of Custom signed Hash DAG iteself and distribute universal Hash DAG fragment
    - Cryptographic Accumulators
        - Collective Signatures (BBS+)
        - CL Signatures (AnonCreds)
- Hash Log
    - KEL is a hash log for key state
    - TEL is a hash log for every other kind of state anchored to key state
        - TEL as versioned hash log
- Content Addressable (Hash indexed) Database
    - De-duplication
    - universaly unique identifers as indexes = secure distributable database 
    - SAID as index = crypto agile interoperable universally unique identifiers as indexes
        - ACDC is a type of content addressable SAID database fragment, graph fragment
    - B-Tree branch 
- Append to Extend
- permissionless data type registry
- permissionless rules registry
- ecosystem governance through permissionless but trusted (reputable) (web-of-trust)  registries
- Versioned Authentic data
- TEL transfer registry for versioned authentic data
- TEL transfer registry for NFTs
- TEL/ACDC for authentic messaging registry
- TEL/ACDC for authentic versioned document registry
- ACDCs are modeled as graph fragments.
- BADA/RUN when not use KEL Seals for distributed authentic database
- replay attack protection through monotonicity
    - replay signed date-time stamped message 
    - replay stale keys to newly date-time stamp and sign message
    - ephemeral identifiers as auxilaries to persistent identifers
        - signed at rest of auxiliary ephemeral identifier

## Concepts
See more [Concepts](https://github.com/WebOfTrust/WOT-terms/blob/main/concepts.md) behind KERI. This is an elaboration on the why's of KERI within the mental model describes in detail above.