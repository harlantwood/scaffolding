export default (holonixRev: string) =>
  `let
  holonixRev = "${holonixRev}";

  holonixPath = builtins.fetchTarball "https://github.com/holochain/holonix/archive/\${holonixRev}.tar.gz";
  holonix = import (holonixPath) {};
  nixpkgs = holonix.pkgs;
in nixpkgs.mkShell {
  inputsFrom = [ holonix.main ];
  packages = with nixpkgs; [
    # Additional packages go here
    nodejs-16_x
  ];
}
`;

