export const helperPeticionesHttp = async (url, options) => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw (`No se pudo realizar`, res.status);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("[helperPeticonesHttp]", error);
  }
};
