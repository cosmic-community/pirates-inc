import { TeamMember } from '@/types'

interface TeamCardProps {
  member: TeamMember
}

export default function TeamCard({ member }: TeamCardProps) {
  const photo = member.metadata?.photo

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-200">
      <div className="flex flex-col items-center text-center">
        {photo && (
          <img
            src={`${photo.imgix_url}?w=320&h=320&fit=crop&auto=format,compress`}
            alt={member.metadata.full_name}
            width="160"
            height="160"
            className="rounded-full mb-6 border-4 border-accent"
          />
        )}
        
        <h3 className="text-2xl font-bold text-primary mb-2">
          {member.metadata.full_name}
        </h3>
        
        <p className="text-lg text-accent mb-4 font-semibold">
          {member.metadata.role}
        </p>
        
        {member.metadata?.bio && (
          <p className="text-gray-600 mb-4">
            {member.metadata.bio}
          </p>
        )}
        
        {member.metadata?.email && (
          <a 
            href={`mailto:${member.metadata.email}`}
            className="text-primary hover:text-accent transition-colors"
          >
            📧 {member.metadata.email}
          </a>
        )}
      </div>
    </div>
  )
}