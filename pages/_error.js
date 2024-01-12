import Layout from "../component/layout";

const _error = ({ statusCode }) => {
  return (
    <Layout>
      {statusCode ? (
        <p className="text-center">
          Cloud not load your page: Status Code {statusCode}
        </p>
      ) : (
        <p>Cloud not get this page</p>
      )}
    </Layout>
  );
};

export default _error;
