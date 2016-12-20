According to the specification, fault and header message parts must be
defined as document/literal, even if the body is defined as RPC style.
Axis 1.x did not follow the specification in this case. If the body
was defined as RPC style, it also used RPC for the fault and header
definitions.
Given that your WSDL uses RPC style, my guess is that it also used
SOAP encoding, so the fault message definition is probably not your
only problem. Axis2 does not support SOAP encooding.
I strongly encourage you to convert your WSDL to document/literal.


The simple fact is that neither Axis2, JAX-WS 2.x RI or Apache CXF 2.x support the of consuming of SOAP web services that use the RPC/encoded messaging mode because it was a losing battle trying to get it to work in their predecessors (Axis 1.x, JAX-RPC 1.1 (JWSDP), and Codehaus XFire 1.x respectively). Current generation web service stacks support RPC/literal, prefer document/literal and enable the wrapped document/literal convention ("document/literal faking RPC").
