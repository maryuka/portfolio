import { useEffect, useState } from "react";

/** シンプルな JSON 取得フック */
export function useFetch<T>(url: string) {
  const [data, setData] = useState<T>();

  useEffect(() => {
    let cancelled = false;
    setData(undefined);
    fetch(url)
      .then((res) => (res.ok ? res.json() : undefined))
      .then((json) => !cancelled && setData(json))
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [url]);

  return data;
}
