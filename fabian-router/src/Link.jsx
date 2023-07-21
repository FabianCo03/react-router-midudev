import { EVENTS } from "./consts";

export function navigate(href) {
  window.history.pushState({}, "", href); // actualiza solo URL sin recargar pág
  const navigationEvent = new Event(EVENTS.PUSHSTATE); // evento personalizado
  window.dispatchEvent(navigationEvent); // permite a otros componentes detectar que la navegación ha ocurrido y realizar acciones adicionales si es necesario
}

export function Link({ target, to, ...props }) {
  // target: _self , _blank | to: href
  const handleClick = (event) => {
    const isMainEvent = event.button === 0; // primary click. cero es botón principal
    const isModifiedEvent =
      event.metaKey || event.altkey || event.ctrlKey || event.shiftKey; // evento modificado
    const isManageableEvent = target === undefined || target === "_self";

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault();
      navigate(to); // navegación con SPA
      window.scrollTo(0, 0);
    }
  };
  console.log({ ...props }); // children: 'ir a home' || 'ir a sobre mi'
  return <a onClick={handleClick} href={to} target={target} {...props}></a>;
}
