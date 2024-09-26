import { prisma } from '@/prisma/prisma-client';
import { Container, Title, SimilarLinks, FeedingInfoBlock } from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export default async function FeedingPage() {
  const files = await prisma.file.findMany({
    where: {
      category: 12,
    },
  });
  return (
    <Container>
      <Title
        text={'Организация питания в образовательной организации'}
        size="2xl"
        className={'mt-4 mb-12'}
      />
      <div className="px-[10px] pb-[40px]">
        <FeedingInfoBlock files={files} />
      </div>
      <Title text={'Другие сведения'} size={'xl'} className="mb-8" />
      <div className="px-[10px] pb-[80px] max-w-[1200px]">
        <SimilarLinks items={navigationData.bottom[0].links} />
      </div>
    </Container>
  );
}