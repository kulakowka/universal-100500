export default function fetchComponentData(dispatch, components, params) {
  const needs = components.reduce( (prev, current) => {
    return current ? (current.serverFetch || []).concat(prev) : prev;
  }, []);

  const promises = needs.map(need => dispatch(need(params)));

  return Promise.all(promises);
}
