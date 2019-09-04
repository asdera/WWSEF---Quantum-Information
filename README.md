# Countering the Photon-Number Splitting Attack
By Andrew Wang and Rachel Kim, Sir John A. Macdonald Secondary School

# Background and Problem
The prominent application of Quantum Information is QKD, short for Quantum Key Distribution. It is a breakthrough encryption protocol allowing secure communication channels between distant partners, whom we will call “Alice” and “Bob”. QKD utilizes the laws of physics—such as superpositions, entanglement, and the no-cloning theorem—to generate a string of bits, known as a secret key. Alice and Bob communicate with photons through a Quantum channel that detects adversaries or unauthorized parties. Theoretically, it could bypass an eavesdropper of unlimited computational power, whom we will call “Eve”. Unfortunately, existing real-life implementations of QKD are insecure and do not meet up to its full potential due to technological limitations. An essential requirement for QKD is that only one photon is to be transmitted at a time, exactly when it is needed. Though in existing experiments, emission sources only approximate single-photons and sometimes produce signals that contain more than one photon. These multi-photon signals open the door to be exploited by a well-known eavesdropping attack, called the “Photon-Number Splitting Attack” (PNS Attack). 

# Purpose
The purpose of this study is to explore the current state of practical QKD and predict possible methods that may be used to counter the Photon-Number Splitting Attack.

# Evidence and Supporting Data
In Quantum Mechanics, the act of observing the state of a photon changes the state itself. But in a multi-photon emission, the eavesdropper can utilize one photon’s information and let the rest go to Bob (like cloning). The obvious solution to the PNS attack is to refrain from sending more than one photon. Weak coherent pulses will either emit one photon or none. However, in this method, the photons are transmitted like a laser that is still exploitable. Other viable—but difficult—methods include the Spontaneous Parametric Down-Conversion, which uses nonlinear crystals to split single photons into two photons of entangled states, or a Photon-Gun, which shoots single photons. But sending one photon at a time has its own problems for practical QKD. The photons will be vulnerable to photon loss, degradation, and noise. As of today, these methods have not allowed QKD to travel a distance greater than one kilometre. 

# An easy-to-implement response to the PNS attack is to detect the activity of photon-number splitting itself. This can be done with the Decoy State QKD, which is just as secure as sending single photons. Alice can send transmissions of photons at wide-ranging intensity levels. Since Eve only blocks pulses with one photon, Eve selectively blocks pulses of smaller average photon numbers. Alice compares the strength of her pulse with the number of photons that Bob receives to detect PNS behaviour.

# Conclusion
The Photon-Number Splitting Attack is a powerful breach of security that exploits the presence of multi-photon emissions. Spontaneous Parametric Down-Conversion or the use of a Photon-Gun are theoretical solutions to sending single discrete photons, but these methods are difficult to achieve with current technology. Therefore, the prominent solution to counter the PNS Attack remains to use decoy states to expose the behaviour of an eavesdropper attack. 

# Acknowledgements
Gratitude is expressed to the Institute for Quantum Computing (IQC) and the Quantum Cryptography School for Young Students (QCSYS) for sparking the passion which initiated this project. They are also appreciated for providing multiple resources, as well as the opportunity to witness QKD firsthand in their laboratories. Appreciation is also expressed to all Professors involved, as well as John Donohue (Scientific Outreach Manager) at the IQC for connecting us with experts in the field.

# Sources

Secure Quantum Key Distribution over 421 km of Optical Fiber
https://physics.aps.org/featured-article-pdf/10.1103/PhysRevLett.121.190502

Toshiba announces world’s fastest quantum key distribution device
https://www.scitecheuropa.eu/quantum-key-distribution/84328/

Photon-Number-Splitting-attack resistant Quantum Key Distribution Protocols without sifting
https://arxiv.org/pdf/1306.6061.pdf

Sifting attacks in finite-size quantum key distribution
https://arxiv.org/pdf/1506.07502.pdf

Practical challenges in quantum key distribution
https://www.nature.com/articles/npjqi201625

Source attack of decoy-state quantum key distribution using phase information
https://arxiv.org/pdf/1304.2541.pdf

Measurement-Device-Independent QKD
http://2014.qcrypt.net/wp-content/uploads/Slater.pdf

Storage of entangled telecom wavelength photons in an Er-doped optical fiber
http://2014.qcrypt.net/wp-content/uploads/Tittel.pdf

Full experimental verifications towards practical deployment of measurement-device-independent quantum key distribution
http://2014.qcrypt.net/wp-content/uploads/Tang.pdf

QKD Overview
https://www.iap.uni-jena.de/iapmedia/de/Lecture/Quantum+Communication1551308400/QComm18_Chap5_4_1_BB84.pdf

High-dimensional decoy-state quantum key distribution over 0.3 km of multicore telecommunication optical fibers
http://repositorio.udec.cl/bitstream/handle/11594/2357/Tesis_High_dimensional_decoy_state.pdf?sequence=1&isAllowed=y

Quantum random number generator on a mobile phone
http://2014.qcrypt.net/wp-content/uploads/Sanguinetti.pdf


Security of Practical Time-Reversed EPR Quantum Key Distribution
https://link.springer.com/article/10.1007/s00453-002-0983-4

Trojan Horse attacks on Quantum Key Distribution systems 
https://arxiv.org/pdf/quant-ph/0507063.pdf

Measurement device independent quantum key distribution
https://arxiv.org/pdf/1109.1473v1.pdf

Attacks on practical quantum key distribution systems (and how to prevent them) 
https://arxiv.org/pdf/1512.07990.pdf

Quantum Encryption and Science Satellite (QEYSSat)
https://uwaterloo.ca/institute-for-quantum-computing/qeyssat

Experimental Quantum Key Distribution at 1.3 Gbit/s Secret-Key Rate over a 10-dB-Loss Channel
https://arxiv.org/pdf/1712.04973.pdf

Spontaneous parametric down-conversion
https://en.wikipedia.org/wiki/Spontaneous_parametric_down-conversion

On the performance of two protocols: SARG04 and BB84
https://arxiv.org/pdf/quant-ph/0510025.pdf

Crpytography From Quantum Mechanical Viewpoint
https://arxiv.org/pdf/1407.2357.pdf

Photon Pairs
https://www.physik.hu-berlin.de/de/nano/lehre/quantenoptik09/Chapter5

Bell States
https://www.physik.hu-berlin.de/de/nano/lehre/quantenoptik09/Chapter6
 
Integrated Server for Measurement-Device-Independent Quantum Key Distribution Network
https://arxiv.org/pdf/1808.08586.pdf

Measurement device independent quantum key distribution
https://arxiv.org/pdf/1109.1473.pdf

Almost-tight and versatile security analysis of measurement-device-independent quantum key distribution
https://arxiv.org/pdf/1901.01942.pdf

Quantum dot single-photon source
https://en.wikipedia.org/wiki/Quantum_dot_single-photon_source

Uncertainty principle
https://en.wikipedia.org/wiki/Uncertainty_principle

Quantum nondemolition measurement
https://en.wikipedia.org/wiki/Quantum_nondemolition_measurement

Quantum computing 101
https://uwaterloo.ca/institute-for-quantum-computing/quantum-computing-101#What-is-quantum-computing

Poisson distribution
https://en.wikipedia.org/wiki/Poisson_distribution

Fast quantum key distribution with decoy number states
https://arxiv.org/ftp/arxiv/papers/0705/0705.0515.pdf

Decoy State Quantum Key Distribution (QKD)
https://docs.google.com/presentation/d/1r2FckGOOQ2RDaGBdNmSq6503XbE-O6BEJL0ZQnu4PAQ/edit#slide=id.p23

Evaluating Performance of Photon-Number-Resolving Detectors
https://arxiv.org/pdf/1812.05422.pdf

Experimental Decoy State Quantum Key Distribution
http://www.perimeterinstitute.ca/videos/experimental-decoy-state-quantum-key-distribution



