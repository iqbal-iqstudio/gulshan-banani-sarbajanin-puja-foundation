import PageWrapper from './PageWrapper';

export default function GenericPage({ title }: { title: string }) {
  return (
    <PageWrapper title={title}>
      <section className="py-24 bg-saffron-50 min-h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-maroon-900 mb-6">{title}</h1>
          <p className="text-gray-600 text-lg">Detailed content for this section will be available soon.</p>
        </div>
      </section>
    </PageWrapper>
  );
}
