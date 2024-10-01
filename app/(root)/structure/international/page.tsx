import { prisma } from '@/prisma/prisma-client';
import { Container, Title, SimilarLinks, InternationalInfoBlock } from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export const revalidate = 360;
export default async function InternationalPage() {
  const files = await prisma.file.findMany({
    where: {
      category: 11,
    },
  });
  return (
    <Container className="px-[10px]">
      <Title text={'Международное сотрудничество'} size="2xl" className={'mt-4 mb-12 pageTitle'} />
      <div className="pb-[40px]">
        <InternationalInfoBlock files={files} />
      </div>
      <Title text={'Другие сведения'} size={'xl'} className="mb-8 pageSubtitle" />
      <div className="pb-[80px] max-w-[1200px]">
        <SimilarLinks items={navigationData.bottom[0].links} />
      </div>
    </Container>
  );
}
