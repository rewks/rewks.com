import SocialIcon from './socialIcons'

export default function Footer() {
    return <>
        <div className="flex justify-center items-center mt-4 min-h-12">
            <footer className="pt-4 border border-solid border-0 border-t border-b-stone-400 dark:border-b-dprimary">
                <div className="flex justify-center">
                    <div className="mx-2">
                        <SocialIcon name="email" href="mailto:contact@rewks.com" size="28" />
                    </div>
                    <div className="mx-2">
                        <SocialIcon name="github" href="https://github.com/rewks" size="28" />
                    </div>
                    <div className="mx-2">
                        <SocialIcon name="twitter" href="https://twitter.com/rewks3" size="28" />
                    </div>
                    <div className="mx-2">
                        <SocialIcon name="facebook" href="https://www.facebook.com/profile.php?=373534832373" size="28" />
                    </div>
                </div>
                <div className="flex justify-between mt-2 mb-4 [&>*]:mx-2">
                    <div>rewks.com</div>
                    <div>•</div>
                    <div>&#169; 2023</div>
                    <div>•</div>
                    <div>Forever a WIP</div>
                </div>
            </footer>
        </div>
    </>
}