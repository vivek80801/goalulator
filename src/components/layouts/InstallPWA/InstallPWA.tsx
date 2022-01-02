import React from "react";

const InstallPWA: React.FC = (): JSX.Element | null => {
  const [supportsPWA, setSupportsPWA] = React.useState(false);
  const [promptInstall, setPromptInstall] = React.useState(null);

  const handler = (e: any) => {
    e.preventDefault();
    console.log("we are being triggered :D");
    setSupportsPWA(true);
    setPromptInstall(e);
  };

  React.useEffect(() => {
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (evt: any) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    if (promptInstall === null) {
      return;
    } else {
      //@ts-ignore
      promptInstall.prompt();
    }
  };

  if (!supportsPWA) {
    return null;
  }
  return (
    <button
      className="link-button"
      id="setup_button"
      aria-label="Install app"
      title="Install app"
      onClick={onClick}
    >
      Install
    </button>
  );
};

export default InstallPWA;
