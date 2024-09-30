import { prisma } from '@/prisma/prisma-client';
import { Container, SimilarLinks, EnrolleeWrapper, Title } from '@/shared/components/shared';
import { navigationData } from '@/shared/constants';

export default async function EnrolleePage() {
  const files = await prisma.file.findMany({
    where: {
      category: 15,
    },
  });
  return (
    <Container className="px-[10px]">
      <Title text={'Абитуриентам'} size="2xl" className={'mt-4 mb-12 pageTitle'} />
      <EnrolleeWrapper files={files} />
      <div className="pb-[80px] max-w-[1200px]">
        <SimilarLinks items={navigationData.bottom[0].links} />
      </div>
    </Container>
  );
}