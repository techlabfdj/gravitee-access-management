import { AbstractStepRelease } from './abstract-step-release.mjs';

export class ReleaseHotfix extends AbstractStepRelease {
  buildCommand(program) {
    super.buildCommand(program, 'release-hotfix');
    this.command
            .description('trigger pipeline release hotfix on CircleCI to create docker image from specific branch')
            .usage('npm run am-release -- --branch="4.3.x" --fix-version="4.3.2" --dry-run release-hotfix');
  }


  computePipelineParameters(options) {
    return {
      tag_latest: options.tagLatest,
      tag_latest_support: options.tagLatestSupport,
    };
  }
  computePipelineParameters(options) {
    return {
      dry_run: options.dryRun,
      fix_version: options.fixVersion,
      gio_action: 'publish_hotfix',
      branch: options.branch,
    };
  }
}